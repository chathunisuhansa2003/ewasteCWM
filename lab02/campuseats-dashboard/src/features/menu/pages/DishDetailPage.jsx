import { useParams, Link } from "react-router-dom";
function DishDetailPage() {
const { id } = useParams();
return (
<div className="detail-card">
<p>Showing details for dish #{id}</p>
<Link className="back-link" to="/">← Back to menu</Link>
</div>
);
}
export default DishDetailPage;