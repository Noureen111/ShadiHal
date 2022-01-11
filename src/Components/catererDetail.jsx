import React from "react";
import { useState } from "react";
import '../style/venuesCaterers.css';
import Comment from "./comment";
import CommentForm from "./commentForm";
import hanif_rajput_caterers from '../images/hanif_rajput_caterers.jpg';
import catererDetailTop from '../images/catererDetailTop.jpg';
import chef from '../images/chef.png';

function CatererDetail() {
    const [fav, setFav] = useState(false);
    const [view, setView] = useState(false);

    // Adding to favourites
    function addToFavourites() {
        if (!fav) {
            document.getElementById("fav").classList.remove("fa-heart-o");
            document.getElementById("fav").classList.add("fa-heart");
        }
        else {
            document.getElementById("fav").classList.remove("fa-heart");
            document.getElementById("fav").classList.add("fa-heart-o");
        }
        setFav(!fav);
    }

    // Showing comment form
    function showDiv() {
        if (!view)
            document.getElementById("addFeedback").classList.remove("hide");
        else
            document.getElementById("addFeedback").classList.add("hide");

        setView(!view);
    }

    return (
        <div>
            <img className="venueDetailImg" src={catererDetailTop} alt="" />

            <div className="venueDetail">
                <div className="col">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 lDetail">
                            <img className="detailImg" src={hanif_rajput_caterers} alt="" />
                            <i onClick={addToFavourites} id="fav" className="heartIcon fa fa-heart-o"></i>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 rDetail">
                            <h2>Title</h2>
                            <p>Description</p>
                            <p>capacity</p>
                            <p>Range: int - int</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 blDetail commentSection">

                            <h2 className="ReviewHeading">Reviews</h2>

                            {/* comment 1 */}
                            <Comment username="Username" title="title" comment="Quidem exercitationem voluptate officiis quaerat ipsum, velit ex commodi harum placeat, unde, ratione natus!" noOfStars={1} />

                            {/* comment 2 */}
                            <Comment username="Username" title="title" comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur id eos beatae! Maiores, consectetur laborum!" noOfStars={1} />

                            {/* comment 3 */}
                            <Comment username="Username" title="title" comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur id eos beatae! Maiores, consectetur laborum!" noOfStars={1} />

                        </div>

                        {/* Map */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 brDetail">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115818.05322849618!2d67.06298855732565!3d24.887263313478492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8a3f0ae445%3A0x2a19e804a72644d5!2sHanif%20Rajput%20Caterers%20pvt%20ltd!5e0!3m2!1sen!2s!4v1641899378382!5m2!1sen!2s" width={600} height={450} style={{ border: 0, height: '80vh', width: '100%', boxSizing: 'border-box' }} allowFullScreen loading="lazy" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">

                            {/* Add review */}
                            <div id="addFeedback" className="mt-3 hide">
                                <CommentForm />
                            </div>
                            <button type="button" id="com" className="btn btn-secondary commentButton" onClick={showDiv}>Comment</button>

                        </div>

                        <div className="col"></div>

                    </div>

                    {/* Menu */}
                    <div className="menuDiv">

                        <h1 className="menuHeading">MENU</h1>
                        <div className="row mt-5 menu">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                                <table className="table table-striped menuTable">
                                    <thead className="menuHead">
                                        <tr>
                                            <th className="text-center" colSpan={4} scope="col">GRAUIES WITH RICE</th>
                                        </tr>

                                        <tr>
                                            <th></th>
                                            <th>CHICKEN</th>
                                            <th>PRAWNS</th>
                                            <th>FISH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>OYSTER</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>SCHILLI DRY</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>SZECHUAN</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>CASHEW NUTS</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>THAI SWEET CHILLI</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>CRISPY HONEY</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>BLACK PAPER</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>ALMOND CHICKEN</td>
                                            <td>690</td>
                                            <td>870</td>
                                            <td>850</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <table className="table table-striped menuTable">
                                    <thead className="menuHead">
                                        <tr>
                                            <th className="text-center" colSpan={4} scope="col">RICE</th>
                                        </tr>

                                        <tr>
                                            <th></th>
                                            <th>F</th>
                                            <th>H</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>EGG FRIED RICE</td>
                                            <td>690</td>
                                            <td>870</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN FRIED RICE</td>
                                            <td>690</td>
                                            <td>870</td>
                                        </tr>

                                        <tr>
                                            <td>BEIJING SPECIAL RICE</td>
                                            <td>690</td>
                                            <td>870</td>
                                        </tr>

                                        <tr>
                                            <td>MASALA RICE</td>
                                            <td>690</td>
                                            <td>870</td>
                                        </tr>

                                        <tr>
                                            <td>PAWNS RICE</td>
                                            <td>690</td>
                                            <td>870</td>
                                        </tr>

                                        <tr>
                                            <td>LOADED RICE</td>
                                            <td>690</td>
                                            <td>870</td>
                                        </tr>

                                        <tr>
                                            <td>shalchlik</td>
                                            <td>690</td>
                                            <td>870</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="row mt-5 menu">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                                <table className="table table-striped menuTable">
                                    <thead className="menuHead">
                                        <tr>
                                            <th className="text-center" colSpan={4} scope="col">BURGERS</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CHICKEN PATTY BURGER</td>
                                            <td>250</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN CHEESE BURGER</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>ZINGER BURGER</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN GRILL BURGER</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>TOWER BURGER</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>B.B.Q BURGER</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN CHEESE PATTY BURGER</td>
                                            <td>690</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                
                            <table className="table table-striped menuTable">
                                    <thead className="menuHead">
                                        <tr>
                                            <th className="text-center" colSpan={4} scope="col">NOODLES</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CHICKEN CHAWMEIN</td>
                                            <td>250</td>
                                        </tr>

                                        <tr>
                                            <td>STAR FRIED CHILLI</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>SESAME NOODLES</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN NOODLES</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>VEG NOODLES</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>pRAWNS</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>VEG CHAWMEIN</td>
                                            <td>690</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="row mt-5 menu">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                                <table className="table table-striped menuTable">
                                    <thead className="menuHead">
                                        <tr>
                                            <th className="text-center" colSpan={4} scope="col">STARTERS</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CHICKEN SPRING ROLL</td>
                                            <td>450</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN DRUMSTICK</td>
                                            <td>890</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN TEMPURA</td>
                                            <td>1150</td>
                                        </tr>

                                        <tr>
                                            <td>FRIED WINGS</td>
                                            <td>890</td>
                                        </tr>

                                        <tr>
                                            <td>WINGS</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>B.B.Q SPYCHILLI</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>WINGS MM</td>
                                            <td>690</td>
                                        </tr>

                                        <tr>
                                            <td>FRIED WINGS</td>
                                            <td>890</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                
                            <table className="table table-striped menuTable">
                                    <thead className="menuHead">
                                        <tr>
                                            <th className="text-center" colSpan={4} scope="col">SHAWARMA</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CHICKEN SHAWARMA</td>
                                            <td>230</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN CHEESE SHAWARMA</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>ZINGER PARATHA ROLL</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>CHICKEN PARATHA ROLL</td>
                                            <td>690</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table table-striped menuTable">
                                    <thead className="menuHead">
                                        <tr>
                                            <th className="text-center" colSpan={4} scope="col">SSANDWICH</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>GRILL SANDWICH</td>
                                            <td>280</td>
                                        </tr>

                                        <tr>
                                            <td>CLUB SANDWICH</td>
                                            <td>850</td>
                                        </tr>

                                        <tr>
                                            <td>SPECIAL CHEESE SANDWICH</td>
                                            <td>850</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CatererDetail;