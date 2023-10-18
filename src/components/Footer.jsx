import React from "react";

const Footer = () => {
  const Foot = [
    {
      parent: 'ABOUT US',
      children: [
        "FAQs", "Contact Us", "Carrer", "Terms And Conditions", "Privacy Policy ", "Car Service Partners", "WorkShop Locator", "Offers", "Reivew", "Directory"
      ]
    },
    {
      parent: 'Our Services',
      children: [
        "FAQs", "Contact Us", "Carrer", "Terms And Conditions", "Privacy Policy ", "Car Service Partners", "WorkShop Locator", "Offers", "Reivew", "Directory"
      ]
    }
    , {
      parent: 'Luxary Brand',
      children: [
        "FAQs", "Contact Us", "Carrer", "Terms And Conditions", "Privacy Policy ", "Car Service Partners", "WorkShop Locator", "Offers", "Reivew", "Directory"
      ]
    }
    , {
      parent: 'POPULAR Brand',
      children: [
        "FAQs", "Contact Us", "Carrer", "Terms And Conditions", "Privacy Policy ", "Car Service Partners", "WorkShop Locator", "Offers", "Reivew", "Directory"
      ]
    }
  ]
  return (
    <>
      <div style={{ fontFamily: 'Inter' }} className="w-[100]  h-[100%]  bg-[#001B39]">
        <div className="p-[98px] flex gap-[110px] ">

          {
            Foot.map((ele) => {
              return (
                <div className="flex flex-col items-start gap-[45px] ">
                  <h1
                    style={{
                      color: "#FFF",
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "15.984px",
                    }}
                  >
                    {ele.parent}
                  </h1>
                  <div style={{
                    display: "flex",
                    padding: "0px 5.64px 12.8px 3px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "30px"
                  }}>

                    {
                      ele.children.map((ele) => {
                        return (
                          <p style={{
                            color: "#FFF",

                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "13.8px", /* 76.667% */
                            letterSpacing: "1px",
                          }}> {ele} </p>
                        )
                      })
                    }



                  </div>
                </div>
              )
            })
          }



        </div>
      </div>

      <div className="w-[100] h-[297px]  bg-[#282828]">

        <div className="p-[98px] flex gap-[110px] ">



        </div>

      </div>
    </>
  );
};

export default Footer;
