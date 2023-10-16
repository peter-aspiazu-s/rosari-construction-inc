import { FC } from "react";
import { AccordionComponent } from '../accordion/AccordionComponent';
import { Dancing_Script } from '@next/font/google';


const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const FrequentlyAskedQuestions: FC = () => {
    return (
        <div className="frequentlyaskedquestions">
            <div className="frequentlyaskedquestions__container">
                <div className={`${dacing_script.className} frequentlyaskedquestions__title`}>
                    Frequently Asked Questions
                </div>

                <div className="frequentlyaskedquestions__accordion-container">
                    <div className="frequentlyaskedquestions__accordion">
                        <AccordionComponent 
                            title="Do you provide free estimates?"
                            description="Yes. We provide free written estimates."
                        />
                        <AccordionComponent 
                            title="How long has Besroi been in business?"
                            description="Besroi was established in 1960. We have been in business for over 50 years."
                        />
                        <AccordionComponent 
                            title="What are the qualifications of your salesmen?"
                            description="All our salesmen are former installers with 20 or more years of experience."
                        />
                        <AccordionComponent 
                            title="How do I know if I need a new roof?"
                            description="Curling, cupping or blistering of the shingles; dark patches on the roof where the roofing granules have worn away- these are signs that your roof is nearing the end of its life. If your roof is approaching the 15-year mark, call our office and one of our knowledgeable salesmen will examine and evaluate your roof."
                        />
                        <AccordionComponent 
                            title="Will you put a dumpster at my house?"
                            description="We provide our crews with smaller dump trailers to lessen the weight in the driveway."
                        />
                        <AccordionComponent 
                            title="Do I need ice protection with my new roof?"
                            description="Yes. Per New York State code."
                        />
                        <AccordionComponent 
                            title="I am building a new home. Do you provide"
                            description="any new construction services?"
                        />
                    </div>

                    <div className="frequentlyaskedquestions__accordion">
                        <AccordionComponent 
                            title="What type of contract do you use and are you insured?"
                            description="We use an attorney general approved contract that abides by NYS law 36-A. We meet all insurance requirements required by all townships."
                        />
                        <AccordionComponent 
                            title="Do I need a building permit?"
                            description="Many towns in WNY require building permits. Besroi will obtain any permits needed."
                        />
                        <AccordionComponent 
                            title="Does your company do repair work?"
                            description="Yes, we provide a full range of service work including roof repairs, roof tune-ups, and siding repairs."
                        />
                        <AccordionComponent 
                            title="Do you require a deposit?"
                            description="Payment is due upon completion. A deposit is not required."
                        />
                        <AccordionComponent 
                            title="How long will my job take?"
                            description="Every project is different depending on the nature of the work. Ask your salesman at the time of the estimate."
                        />
                        <AccordionComponent 
                            title="What is your warranty?"
                            description="Besroi provides a 5-year labor warranty. Manufacturer’s warranties vary by product."
                        />
                        <AccordionComponent 
                            title="Are you a member of the Home Improvement Council, Better Business Bureau or Buffalo-Niagara Builders Association?"
                            description="Yes. We are long-standing members of the HIC, BBB, and BNBA."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}