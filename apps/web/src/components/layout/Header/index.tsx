'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import styles from './index.module.scss';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/home/logo.png"
            alt="PetBuddy"
            width={150}
            height={40}
          />
        </div>
        <NavigationMenu.Root className={styles.nav}>
          <NavigationMenu.List className={styles.navList}>
            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.navLink} href="/services">
                서비스
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.navLink} href="/community">
                커뮤니티
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.navLink} href="/about">
                소개
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className={styles.userMenu}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className={styles.avatarTrigger}>
              <Avatar.Root className={styles.avatar}>
                <Avatar.Image
                  src="/default-avatar.png"
                  alt="사용자"
                  className={styles.avatarImage}
                />
                <Avatar.Fallback>사용자</Avatar.Fallback>
              </Avatar.Root>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className={styles.dropdownContent}>
                <DropdownMenu.Item className={styles.dropdownItem}>
                  프로필
                </DropdownMenu.Item>
                <DropdownMenu.Item className={styles.dropdownItem}>
                  설정
                </DropdownMenu.Item>
                <DropdownMenu.Separator className={styles.dropdownSeparator} />
                <DropdownMenu.Item className={styles.dropdownItem}>
                  로그아웃
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}
