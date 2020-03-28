import cartIcons from './cart'

const icons = {...cartIcons};

const Icon = ({name}) => {
    return (
        <div>
            {icons[name]}
        </div>
    );
};

export default Icon;