'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { isSupabaseConfigured, supabase } from '@/lib/supabase/client';
import { syncFromCloud } from '@/lib/storage';
import { useTheme } from '@/components/theme-provider';

export function CloudSyncProvider() {
  const pathname = usePathname();
  const { applySyncedTheme } = useTheme();
  const hasSyncedRef = useRef(false);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || pathname === '/login') {
      return;
    }

    let cancelled = false;

    const runInitialSync = async () => {
      const result = await syncFromCloud();
      if (!cancelled && result.ok && result.data?.profile?.theme_preference) {
        applySyncedTheme(result.data.profile.theme_preference);
      }
    };

    if (!hasSyncedRef.current) {
      hasSyncedRef.current = true;
      void runInitialSync();
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        void runInitialSync();
      } else if (event === 'SIGNED_OUT') {
        hasSyncedRef.current = false;
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [pathname, applySyncedTheme]);

  return null;
}
