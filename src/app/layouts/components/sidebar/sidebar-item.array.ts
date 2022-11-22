import { RouteEnum } from "@core";
import { ISidebarItems } from "./sidebar-item.interface";

export const SIDEBAR_ITEM_ARRAY: ISidebarItems[] = [
    {
        itemName: 'Новини',
        iconName: 'newspaper',
        routeName: RouteEnum.Digest
    },
    {
        itemName: 'Обзори',
        iconName: 'reviews',
        routeName: RouteEnum.Reviews
    },
    {
        itemName: 'Блоги',
        iconName: 'edit',
        routeName: RouteEnum.Blog
    },
];
