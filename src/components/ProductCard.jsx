export default function ProductCard({
    image,
    title,
    category,
    oldPrice,
    newPrice,
    colors = [],
    badge
  }) {
    return (
      <div className="bg-white rounded shadow-sm overflow-hidden">
        {/* Ürün Görseli + Rozet */}
        <div className="relative">
          <img src={image} alt={title} className="w-full h-52 object-cover" />
          {badge && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
              {badge}
            </span>
          )}
        </div>
  
        {/* Kart Metinleri */}
        <div className="p-4 flex flex-col gap-2">
          <p className="text-sm text-gray-500">{category}</p>
          <h3 className="text-base font-semibold">{title}</h3>
  
          {/* Fiyatlar */}
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
            <span className="text-sm text-green-600 font-semibold">{newPrice}</span>
          </div>
  
          {/* Renkler */}
          <div className="flex gap-2 mt-2">
            {colors.map((color, index) => (
              <span key={index} className={`w-3 h-3 rounded-full ${color}`}></span>
            ))}
          </div>
  
          
        </div>
      </div>
    );
  }
  