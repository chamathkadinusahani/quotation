import * as React from "react";
import styles from './MyComponent.module.css';
import Footer from './Footer';  // Import Footer as a React component
import './Footer.css';  // Import CSS for styling (optional, if needed)
import Header1 from './Header1';

export default function MyComponent() {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.div}>
         <Header1/>
          <div className={styles.div3}>
            <div className={styles.div4}>
              <div className={styles.column}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f99b99893dd9e06a74c7e501dccb2770bfbdb8de8253938cbd597b350b83a7?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
                  className={styles.img}
                />
              </div>
              <div className={styles.column2}>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5"
                  className={styles.img2}
                />
              </div >
              <div className={styles.column3}>
                <div className={styles.div5}>
                  <div className={styles.sendQuotation}>SEND QUOTATION</div>
                 <div className={styles.inputFieldWithLabel}>
                    <div className={styles.label}>Email</div>
                    
                    < input type="email" className={styles.inputField}/>
                      <div className={styles.wrapper} />
                    
                  </div>
                  <div className={styles.inputFieldWithLabel2}>
                    <div className={styles.label2}>Description</div>
                  </div>
                  < input type="text" className={styles.inputField2}/>
                    <div className={styles.wrapper2} />
                 
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div6}>
            <div className={styles.gloriusTextileHasBeenTheGoToCompanySinceThe80S}>
              GLORIUS TEXTILE HAS BEEN THE GO-TO COMPANY SINCE THE 80'S.
            </div>
            <button type="submit" className={styles.button}>send a quotation</button>
          </div>
          <div className={styles.realizeYourVision}>REALIZE YOUR VISION</div>
        </div>
        <Footer/>  {/* Render the Footer component */}
      </div>
    </>
  );
}
