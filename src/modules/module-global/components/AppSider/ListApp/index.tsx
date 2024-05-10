/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/** lib icons */
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

/** components */
import ListBase from '@module-base/components/ListBase';
import AppItem from './AppItem';

/** constants */
import { ScreenPath } from '@module-global/constants/ScreenPath.ts';

/** types */
import type { ListAppProps, TypeAppItem } from '@module-global/models';

const ListApp = React.memo(function ListApp(props: ListAppProps) {
    const { isTooltip } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const MENU_ROUTER = React.useRef<TypeAppItem[]>([
        {
            path: ScreenPath.SHEET_1,
            name: 'Sheet 1',
            icon: <CalendarMonthIcon />,
            onClick: () => navigate(ScreenPath.SHEET_1),
        },
        {
            path: ScreenPath.SHEET_2,
            name: 'Sheet 2',
            icon: <CalendarMonthIcon />,
            onClick: () => navigate(ScreenPath.SHEET_2),
        },
    ]).current;

    const router = `/${pathname.split('/')[1]}`;

    const renderItem = (item: TypeAppItem) => {
        return <AppItem key={item.path} isSelected={item.path === router} isTooltip={isTooltip} item={item} />;
    };

    return <ListBase data={MENU_ROUTER} renderItem={renderItem} />;
});

export default ListApp;
