// import React, { useEffect } from 'react'
// import { chooseDepartment } from '../../redux/actions/authActions';
// import SetupView from './SetupView';
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

// export default function SetupContainer() {

//     const [value, setValue] = React.useState('');

//     const dispatch = useDispatch()

//     const { push } = useHistory()

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     };

//     useEffect(() => {
//         if (value) {
//             dispatch(chooseDepartment(value))
//             push('/login')
//         }
//     }, [value, dispatch, push])





//     const facultes = [
//         {

//             "id": 1,
//             "title": "FS",
//             "departments": ['maths', 'info']

//         },
//         {
//             "id": 2,
//             "title": "FSJP",
//             "departments": ['dp', 'droit prive']

//         }
//     ]


//     console.log('setupcontainer')

//     return (
//         <>
//             {/* <SetupView value={value} handleChange={handleChange} facultes={facultes} /> */}
//         </>
//     )
// }
