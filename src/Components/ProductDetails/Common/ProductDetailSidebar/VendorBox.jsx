import ProductBox1Rating from '@/Components/Common/ProductBox/ProductBox1/ProductBox1Rating';
import StoreVendor from '@/Components/Seller/Stores/StoreVendor';
import Avatar from '@/Components/Common/Avatar';
import Link from 'next/link';
import { useContext } from 'react';
import I18NextContext from '@/Helper/I18NextContext';

const VendorBox = ({ productState }) => {
   const { i18Lang } = useContext(I18NextContext);

   return (
      <div className='vendor-box'>
         <div className='vendor-contain'>
            <div className='vendor-image'>
               <Link href={`/seller/stores/${productState?.product?.store?.slug}`}>
                  <Avatar data={productState?.product?.store?.store_logo} height={64} width={64} name={productState?.product?.store?.store_name} />
               </Link>
            </div>

            <div className='vendor-name'>
               <h5 className='fw-500'>{productState?.product?.store?.store_name}</h5>

               <div className='product-rating mt-1'>
                  <ProductBox1Rating totalRating={productState?.product?.store?.rating_count} />
                  <span>{`(${productState?.product?.store?.reviews_count ?? 0} Reviews)`}</span>
               </div>
            </div>
         </div>

         <p className='vendor-detail'>{productState?.product?.store?.description}</p>

         <div className='vendor-list'>
            <ul>
               <StoreVendor elem={productState?.product?.store} />
            </ul>
         </div>
      </div>
   );
};

export default VendorBox;
