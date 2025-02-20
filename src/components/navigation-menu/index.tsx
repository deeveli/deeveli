'use client';

import {
  LucidePhone,
  LucideTextQuote,
  MailCheck,
  PhoneCall,
  TextIcon,
  TextQuote,
  TextQuoteIcon,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { CalloutIcon, TextField } from '@radix-ui/themes';

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/works" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              My Works
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/contact" legacyBehavior passHref>
              Contact Me
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="scale-[0.7]">
              <ul className=" grid grid-cols-3 gap-3 md:w-[400px] lg:w-[500px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="hover:bg-red-300 flex size-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://wa.me/233201955961"
                      target="_blank"
                    >
                      <LucidePhone className="size-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        WhatsApp
                      </div>
                      <p>Connect with me from your mobile. </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="hover:bg-red-300 flex size-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="tel:0201955961"
                    >
                      <PhoneCall className="size-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Phone Call
                      </div>
                      <p>I'm down for a call. Are you? </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="hover:bg-red-300 flex size-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="mailto:divine.e.abah@gmail.com"
                    >
                      <MailCheck className="size-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">Mail</div>
                      <p>Need to be formal? Try mailing</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none',
            'transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent',
            'focus:text-accent-foreground',
            'sm:text-sm',
            'md:text-sm',
            'lg:text-sm',
            'xl:text-xl',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
