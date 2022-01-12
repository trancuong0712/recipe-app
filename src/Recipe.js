
function Recipe({label, img, calories }) {
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <h3>{calories}</h3>
            <img src={img} alt="" />
        </div>
    )
}

export default Recipe