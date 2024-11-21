import { Theme } from '@radix-ui/themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <Theme appearance="dark">{children}</Theme>;
};
export default ThemeProvider;
