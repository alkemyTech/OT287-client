import * as Yup from 'yup';

const validationSchema = () =>  Yup.object({
        welcomeText: Yup.string().required('Required').min(20, 'Welcome text must be of minimum20 characters'),
        slideOneText: Yup.string().required('Required'),
        slideTwoText: Yup.string().required('Required'),
        slideThreeText: Yup.string().required('Required'),
    })

export default validationSchema