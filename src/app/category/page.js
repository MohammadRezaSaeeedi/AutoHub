import { notFound } from 'next/navigation';
import CategoryCard from "@/components/template/CategoryCard";
function Category() {
  notFound();
  return (
    <div>
      <CategoryCard />
    </div>
  );
}
export default Category;
