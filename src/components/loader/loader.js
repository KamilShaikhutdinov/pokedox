import React from "react";
import styles from './loader.module.css'

function Loader() {
  return (
    <div className={styles.loader}>
      {new Array(12).fill(0).map((item, idx) => idx + 1).map((item) => <div key={item} />)}
    </div>
  );
}
export default Loader;