import { ScreenList } from './model/screen-list';

export interface IListItem<T> {
  data: T;
  onPress: () => void;
}

export interface IScreenListRoute {
  route: { name: string };
}

export { ScreenList }