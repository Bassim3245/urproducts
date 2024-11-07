import "./ProductCard.css";
import { useTranslation } from 'react-i18next';

const ProductCard = ({ category, onClick }) => {
  const { i18n } = useTranslation(); // استخدام useTranslation للحصول على معلومات اللغة

  const name = i18n.language === 'ar' ? category?.name_ar : category?.name_en;

  return (
    <div className="card-product" onClick={() => onClick(category)}>
      <div className="image-container">
        <img src={category?.image_c} alt={name} />
      </div>
      <div className="product-info">
        <p>{name}</p> {/* عرض الاسم بناءً على اللغة الحالية */}
      </div>
    </div>
  );
};

export default ProductCard;
