import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';
import { Col, Row } from 'reactstrap';
import ProductBox1 from '@/Components/Common/ProductBox/ProductBox1/ProductBox1';
import { placeHolderImage } from '../../../../Data/CommonPath';
import { dateFormate } from '@/Utils/CustomFunctions/DateFormate';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import BlogContext from '@/Helper/BlogContext';
import I18NextContext from '@/Helper/I18NextContext';
import bannerImage from '../../../../public/assets/images/mega-menu.png';
import banner2Image from '../../../../public/assets/images/mega-menu2.png';
import ProductContext from '@/Helper/ProductContext';

const MenuSlider = ({ menu }) => {
   const { i18Lang } = useContext(I18NextContext);
   const { filteredProduct } = useContext(ProductIdsContext);
   const { productAPIData } = useContext(ProductContext);
   const { blogState } = useContext(BlogContext);
   return (
      <>
         {menu?.slider === 'product' && (
            <Col xl={6} className='dropdown-column d-xl-block d-none'>
               <div className='menu-product-slider'>
                  <Row>
                     {(filteredProduct?.length > 0 ? filteredProduct : productAPIData?.data)?.slice(0, 2)?.map((product, i) => (
                        <Col xs={6} key={i}>
                           <ProductBox1 imgUrl={product?.product_thumbnail} productDetail={{ ...product }} />
                        </Col>
                     ))}
                  </Row>
               </div>
            </Col>
         )}
         {menu.slider === 'banner' && (
            <Col xl={3} className='dropdown-column d-xl-block d-none'>
               <div className='menu-img-banner'>
                  <Link href={`/product/deliciously-sweet-watermelon`} className='text-title'>
                     <Image src={bannerImage} alt='banner' className='img-fluid' height={511} width={270} />
                  </Link>
               </div>
            </Col>
         )}
         {menu.slider === 'banner_landscape' && (
            <Col xl={12} className='dropdown-column d-xl-block d-none'>
               <div className='menu-img-banner rounded overflow-hidden mx-0 mt-3 mb-0'>
                  <Image src={banner2Image} alt='banner_landscape' className='img-fluid' height={190} width={954} />
               </div>
            </Col>
         )}
         {menu?.slider === 'blog' && (
            <Col xl={9} className='dropdown-column d-xl-block d-none'>
               <Row>
                  {blogState?.slice(0, 2)?.map((blog, i) => (
                     <Col xs={6} key={i}>
                        <div className='blog-box sticky-blog'>
                           <div className='blog-box-image'>
                              <Link href={`/blogs/${blog?.slug}`} className='blog-image'>
                                 <Image src={blog?.blog_thumbnail ? blog?.blog_thumbnail?.original_url : placeHolderImage} className='img-fluid' alt={blog.title} height={299} width={398} />
                              </Link>
                           </div>
                           <Link href={`/blogs/${blog?.slug}`} className='blog-detail'>
                              <h6>{dateFormate(blog.created_at)}</h6>
                              <h5>{blog?.title}</h5>
                           </Link>
                        </div>
                     </Col>
                  ))}
               </Row>
            </Col>
         )}
      </>
   );
};

export default MenuSlider;
