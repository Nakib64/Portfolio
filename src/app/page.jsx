import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Contact from "./contact/page";
import Resume from "./resume/page";
import Services from "./services/page";
import Work from "./work/page";
import { MotionSection } from "./motion_section/Motion";
import HomeWorkSec from "./Home_work_sec/workSection";

export default function Home() {
	return (
		<div className="px-4">
			<MotionSection>
				<section className="h-full w-full">
					<div className="mx-auto container h-full 2xl:max-w-7xl mt-10 ">
						<div className="md:mt-0 mt-10 flex flex-col-reverse gap-10 md:gap-20 lg:flex-row items-center justify-between lg:pt-4 pb-10">
							{/* text */}
							<div className="text-center md:text-left md:order-none">
								<span>Full stack Developer</span>
								<h1 className="h1">
									Hello I'm <br /> <span className="text-accent">Nafiz Uddowla</span>
								</h1>
								<p className="max-w-[500px] mb-9 text-white/80">
									I excel at crafting elegant digital experiences and I am profiecient in
									web development and its technologies.
								</p>
								{/* button and socials */}
								<div className="flex flex-col md:flex-row items-center gap-8">
									<a
										href="https://drive.google.com/uc?export=download&id=17tbmzYnAh621bFaHYgwdM0M6SHrSpOhB"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button
											className="hover:bg-accent hover:text-white font-semibold border-accent rounded-2xl"
											variant="outline"
										>
											<span>Download Resume</span>
											<FiDownload className="text-xl" />
										</Button>
									</a>

									<Social />
								</div>
							</div>
							{/* photo */}
							<div className="md:mb-0">
								<Photo />
							</div>
						</div>
						<Stats />
					</div>
				</section>
			</MotionSection>

			<MotionSection>
				<HomeWorkSec></HomeWorkSec>
			</MotionSection>

			<MotionSection>
				<Resume />
			</MotionSection>

			<MotionSection>
				<Services />
			</MotionSection>

			<MotionSection>
				<Contact />
			</MotionSection>
		</div>
	);
}
