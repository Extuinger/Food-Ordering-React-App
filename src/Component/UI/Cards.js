import classes from  './Cards.module.css'

var Cards = props => {
    return <div className={classes.card}>{props.children}</div>
};

export default Cards