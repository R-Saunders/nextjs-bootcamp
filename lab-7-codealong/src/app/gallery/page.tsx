import Image from "next/image";
import Platypus from "../../../public/platypus.jpeg";

export default function Gallery() {
	return (
		<div>
			<h2>Gallery</h2>
			<Image src={Platypus} alt="Baby Platypus" placeholder="blur" />
		</div>
	);
}
