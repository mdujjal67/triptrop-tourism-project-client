

const ClientQuestions = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="text-center mx-auto">
                    <h2 className="text-xl lg:text-4xl font-extrabold">Clients Question</h2>
                    <p className="font-medium mt-6 mb-8 w-[300px] lg:w-[907px] mx-auto">Welcome to Tourism Management! To ensure we meet your needs, please complete our brief questionnaire below. Your input will help us tailor our services to your preferences. Thank you for choosing Tourism Management!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center border p-5 lg:p-8 rounded-2xl justify-between m-5 lg:m-0">
                    <div className="w-full row-span-1 mb-3 lg:mb-0">
                        <img src="https://i.ibb.co/kqN7Nht/11.png" alt="question-pic" />
                    </div>
                    <div className="w-full row-span-2">
                        {/* question 01 */}
                        <div className="collapse collapse-plus -mx-4 w-[270px] lg:w-auto">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-bold">
                                How can I book a tour package?
                            </div>
                            <div className="collapse-content ">
                                <p className="leading-6 lg:leading-7 text-[14px] lg:text-[16px]">Booking is easy! Visit our website, choose your destination and package, then follow the simple booking process.</p>
                            </div>
                        </div>
                        <div className="border-bottom my-2">

                        </div>
                        {/* question 02 */}
                        <div className="collapse collapse-plus -mx-4 w-[270px] lg:w-auto">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Can I customize my tour itinerary?
                            </div>
                            <div className="collapse-content">
                                <p className="leading-6 lg:leading-7 text-[14px] lg:text-[16px]">Yes! We offer customizable tour packages tailored to your preferences and interests.</p>
                            </div>
                        </div>
                        {/* question 03 */}
                        <div className="collapse collapse-plus -mx-4 w-[270px] lg:w-auto">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-bold">
                                What types of accommodations are available?
                            </div>
                            <div className="collapse-content">
                                <p className="leading-6 lg:leading-7 text-[14px] lg:text-[16px]">We offer a range of accommodations from luxury resorts to eco-friendly lodges, ensuring a comfortable stay.</p>
                            </div>
                        </div>
                        <div className="border-bottom my-2">

                        </div>
                        {/* question 04 */}
                        <div className="collapse collapse-plus -mx-4 w-[270px] lg:w-auto">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                Do you assist with visa applications?
                            </div>
                            <div className="collapse-content">
                                <p className="leading-6 lg:leading-7 text-[14px] lg:text-[16px]">Yes, we provide comprehensive support with visa applications and travel documentation, making your journey hassle-free.</p>
                            </div>
                        </div>
                        <div className="border-bottom my-2">

                        </div>
                        {/* question 05 */}
                        <div className="collapse collapse-plus -mx-4 w-[270px] lg:w-auto">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                            Do you offer group discounts for larger bookings?
                            </div>
                            <div className="collapse-content">
                                <p className="leading-6 lg:leading-7 text-[14px] lg:text-[16px]">YYes, we offer special discounts for group bookings, making it easier and more affordable for families, friends, or organizations to travel together. Contact us for details on group pricing and discounts.</p>
                            </div>
                        </div>
                        <div className="border-bottom my-2">

                        </div>
                        {/* question 06 */}
                        <div className="collapse collapse-plus -mx-4 w-[270px] lg:w-auto">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-bold">
                                What are the payment options available for booking?
                            </div>
                            <div className="collapse-content">
                                <p className="leading-6 lg:leading-7 text-[14px] lg:text-[16px]">We accept various payment methods including credit/debit cards, bank transfers, and online payment gateways for your convenience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientQuestions