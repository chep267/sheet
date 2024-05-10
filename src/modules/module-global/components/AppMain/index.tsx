/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

/** constants */
import { ScreenPath } from '@module-global/constants/ScreenPath.ts';

/** hooks */
import { useSider } from '@module-global/hooks/useSider.ts';

/** screens */
const NotFoundScreen = React.lazy(() => import('@module-global/screens/NotFoundScreen'));
const Sheet1Screen = React.lazy(() => import('@module-global/screens/Sheet1'));
const Sheet2Screen = React.lazy(() => import('@module-global/screens/Sheet2'));

export default function AppMain() {
    const {
        data: { openSider },
    } = useSider();

    return (
        <Box
            className={classnames(
                'flex h-full max-[567px]:w-full transition-[width] duration-500',
                { ['w-app-main-app-bar-expand']: openSider },
                { ['w-app-main-app-bar-collapse']: !openSider }
            )}>
            <React.Suspense fallback={null}>
                <Routes>
                    <Route path={`${ScreenPath.SHEET_1}/*`} element={<Sheet1Screen />} />
                    <Route path={`${ScreenPath.SHEET_2}/*`} element={<Sheet2Screen />} />
                    <Route path="*" element={<NotFoundScreen />} />
                </Routes>
            </React.Suspense>
        </Box>
    );
}
