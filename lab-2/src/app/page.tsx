import Image from "next/image";
import Logo from "../imgs/me.png";

export default function Home() {
	return (
		<main className="m-w-1000">
			<h1 className="text-5xl text-red-500">Welcome to my first Next app.</h1>
			<div className="flex">
				<div className="relative">
					<Image
						className="object-contain max-w-sm"
						src={Logo}
						fill={true}
						alt="Picture of the author"
					/>
				</div>
				<div>
					<p>
						My name is Rich and I am testing out Nextjs and learning it as part
						of the Tech Educators Next.js bootcamp.
					</p>
					<p>
						We will be learning about the Next.js framework as well as Tailwind
						CSS and TypeScript
					</p>
				</div>
			</div>
		</main>
	);
}
