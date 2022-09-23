import React from 'react';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';


const Alert = ({icon,show, title, text, textButton}) => {
    const SweetAlert = withSwalInstance(swal.mixin({
        icon:icon,
    }));

    return (
        <div>
            <SweetAlert
                show={show}
                title={title}
                text={text}
                confirmButtonText={textButton || '!Ok'}
                confirmButtonColor='rgb(36,182,249)'
                onConfirm={() => !show}
            />
        </div>
    );

}

export default Alert