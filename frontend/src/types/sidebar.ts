export interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface NavSectionProps {
  title?: string;
  links: NavLinkProps[];
}
