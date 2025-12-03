import './StarBorder.css';

const StarBorder = ({
    as: Component = 'button',
    className = '',
    color = '#00FFAA',
    speed = '5s',
    children,
    ...rest
}) => {
    return (
        <Component
            className={`star-border ${className}`}
            style={{
                '--border-color': color,
                '--animation-speed': speed
            }}
            {...rest}
        >
            <div className="star-border-content">{children}</div>
        </Component>
    );
};

export default StarBorder;
