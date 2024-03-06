import Link from "next/Link";
import styles from "./menu.module.css";
import Image  from "next/image";

export default function Map(){
    return(
        <header >
<iframe
          id="gmap_canvas"
          src={"https://maps.google.com/maps?       q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
          frameborder="0" scrolling="no"
          marginheight="0"
          marginwidth="0">
</iframe>
        </header>
    )
}