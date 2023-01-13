export interface MenuItemInterface {
  label: string;
  link: string;
  index: number;
}

export const menuItems: MenuItemInterface[] = [
  {
    label: 'drag & drop',
    link: 'drag-and-drop',
    index: 0,
  },
  {
    label: 'bridge patter',
    link: 'bridge-pattern',
    index: 1,
  },
  {
    label: 'value accessor',
    link: 'value-accessor',
    index: 2,
  },
  {
    label: 'custom material form field',
    link: 'custom-form-field',
    index: 3,
  },
];
