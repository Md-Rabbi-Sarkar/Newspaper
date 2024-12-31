

const Categories = ({category}) => {
    const { title, image_url,} =category || {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-16 border-b-2">
            <figure><img src={image_url
            } alt="news" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
};

export default Categories;