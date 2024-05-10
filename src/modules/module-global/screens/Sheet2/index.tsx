/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';

/** components */
import TableBase from '@module-base/components/TableBase';

export default function Sheet2() {
    const classes = useStyles();

    const tableData = [
        {
            id: 1,
            date: 'Tú',
            nc10: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc20: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc30: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
        },
        {
            id: 2,
            date: 'Tự',
            nc10: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc20: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc30: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
        },
        {
            id: 3,
            date: 'A',
            nc10: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc20: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc30: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
        },
        {
            id: 4,
            date: 'B',
            nc10: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc20: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc30: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
        },
        {
            id: 5,
            date: 'C',
            nc10: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc20: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
            nc30: [
                {
                    label: 'SP đạt:',
                    value: '',
                },
                {
                    label: 'SP hỏng:',
                    value: '',
                },
            ],
        },
        {
            id: 7,
            date: 'total',
            nc10: [
                {
                    label: 'Tổng:',
                    value: '',
                },
                {
                    label: 'Tổng:',
                    value: '',
                },
            ],
            nc20: [
                {
                    label: 'Tổng:',
                    value: '',
                },
                {
                    label: 'Tổng:',
                    value: '',
                },
            ],
            nc30: [
                {
                    label: 'Tổng:',
                    value: '',
                },
                {
                    label: 'Tổng:',
                    value: '',
                },
            ],
        },
    ];

    const renderLabelDate = () => <Box className="flex items-center justify-center w-full h-full p-3">ngày</Box>;
    const renderContentDate = (item: (typeof tableData)[number]) => (
        <Box className="flex items-center justify-center w-full h-full p-3">{item.date === 'total' ? '' : item.date}</Box>
    );

    const renderLabelKhau = () => (
        <Box className="flex flex-col items-center justify-center w-full h-full">
            <Box className="flex w-full h-full p-3">khâu 7</Box>
            <Box className="flex w-full h-full">
                {[
                    { id: 10, title: 'NC 10' },
                    { id: 20, title: 'NC 20' },
                    { id: 30, title: 'NC 30' },
                ].map(({ id, title }, index) => (
                    <Box
                        key={id}
                        className={`${classes.borderColor} flex flex-1 items-center justify-center p-3 border ${index === 0 ? 'border-l-0' : ''} ${index === 2 ? 'border-r-0' : ''}`}>
                        {title}
                    </Box>
                ))}
            </Box>
        </Box>
    );

    const renderContentKhau = (item: (typeof tableData)[number]) => (
        <Box className="flex flex-row w-full h-full">
            {item.nc10.map(({ label }, index) => (
                <Box key={index} className={`${classes.borderColor} flex items-center h-full gap-3 min-w-[100px] p-3`}>
                    <Box className="flex flex-1">
                        <Typography>{label}</Typography>
                    </Box>
                    <Box className="flex flex-1">
                        <TextField type="number" className={classes.input} />
                    </Box>
                </Box>
            ))}
            {item.nc20.map(({ label }, index) => (
                <Box key={index} className={`${classes.borderColor} flex items-center h-full gap-3 min-w-[100px] p-3`}>
                    <Box className="flex flex-1">
                        <Typography>{label}</Typography>
                    </Box>
                    <Box className="flex flex-1">
                        <TextField type="number" className={classes.input} />
                    </Box>
                </Box>
            ))}
            {item.nc30.map(({ label }, index) => (
                <Box key={index} className={`${classes.borderColor} flex items-center h-full gap-3 min-w-[100px] p-3`}>
                    <Box className="flex flex-1">
                        <Typography>{label}</Typography>
                    </Box>
                    <Box className="flex flex-1">
                        <TextField type="number" className={classes.input} />
                    </Box>
                </Box>
            ))}
        </Box>
    );

    return (
        <Box className="flex justify-center items-center w-full h-full p-3">
            <Box className="flex w-auto h-auto">
                <TableBase
                    className={classes.tableContainer}
                    rows={[
                        {
                            id: 'date',
                            label: renderLabelDate,
                            render: renderContentDate,
                        },
                        {
                            id: 'khau',
                            label: renderLabelKhau,
                            render: renderContentKhau,
                        },
                    ]}
                    data={tableData}
                />
            </Box>
        </Box>
    );
}

const useStyles = makeStyles(({ palette }) => ({
    tableContainer: {
        '& td, th': {
            padding: 0,
            border: `1px solid ${palette.divider}`,
        },
    },
    border: {
        border: `1px solid ${palette.divider}`,
    },
    borderColor: {
        borderStyle: 'solid',
        borderColor: palette.divider,
    },
    input: {
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
        },
        '& input[type=number]': {
            MozAppearance: 'textfield',
        },
    },
}));
