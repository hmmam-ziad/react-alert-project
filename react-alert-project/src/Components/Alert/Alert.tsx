import { X } from 'lucide-react';
import './index.scss';
import { ReactNode } from 'react';

type alertTypes = "alert-default" | "alert-info" | "alert-warning" | "alert-danger" | "alert-success";


interface Iprops {
    type: alertTypes;
    icon: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
}

const Alert = ({type, icon, title, description, children}: Iprops) => {
    return(
        <div className={type}>
            <div className='alert-header'>
                <div className='title'>
                    <span>
                        {icon}
                    </span>
                    <h4>{title}</h4>
                </div>
                <X className="close" size={20}/>
            </div>
            {children ? children : <p>{description}</p>}
        </div>
    );
}

export default Alert