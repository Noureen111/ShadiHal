import React, { useEffect, useState } from "react";
import '../style/venuesCaterers.css';
import Rating from "./rating";
import Filter from "./filter";
import Dropdown from './dropdown';
import Radio from "./radio";
import axios from 'axios';
import Card2 from './card2';
import c_background from '../images/c_background.jpg';

function CatererPage(){
    const [caterers, setcaterer] = useState([1, 2, 3]);


    return (
        <div>
            <div>
                <div className="col">
                    <div className="row">
                        <img className="imgVenue" src={c_background} alt="" />
                    </div>
                    <div className="row">
                        <div className="left col-lg-4 col-md-12">
                            
                            <h5 className="headings">Filter Conditions</h5>
                            <br />
                            <Filter />
                            <br /><br />

                            <h5 className="headings">Avg. Customer Review</h5>
                            <Rating /><br /><br />
                            <Rating /><br /><br />
                            <Rating /><br /><br />
                            <Rating /><br /><br />
                            <Rating /><br /><br /><br />

                            {/* Radio button */}
                            <h5>Price</h5>
                            <br /><Radio /><br />

                        </div>
                        <div className="right col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col">
                                    <Dropdown />
                                </div>

                                <div className="col">
                                    <div></div>
                                </div>
                            </div>

                            <div className="row ml-5 d-flex justify-content-around">
                                
                                {
                                    caterers.map((cat) => {
                                        return <div key={cat} className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <h1>hello</h1>
                                            {/* <Card2 caterer={cat} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PEA8PDw8PDw8NDQ0PDQ8NDQ0PFREWFhUSFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0dHR0tLSs3KystKysrLS0tLSsrKystLS0rLS0rLS0tLS0tLSstKy0tLS0rLTc3LSstKy0rK//AABEIAQMAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEYQAAIBAgIFBwgGCAUFAAAAAAABAgMRBCEFEjFRcQZBYYGRobEHEyIyQlJywSOSsrTR4SUzNWJzgqLwFBUkNPEWQ1N0wv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAQACAgEEAgICAwAAAAAAAAABAgMRMQQSIUEycSKBFGETM1H/2gAMAwEAAhEDEQA/AOrAwiYAAEawEwoAUAQMIGwGMaxzGgNFPLeuAWNYCi3vb3pkiBSQ5gFDkxgQDYVgoIDGhpKMaAaBofYDQEbQNUkBYBmqEcICwBgEAmNFJjbgOBca2ByAfrDXIjcxk6gEjmNc+kq1a6KlTFoDTdTpFGRRwU3Vlqp2srtl5YN++vq/mZ2y1rOpleuO0xuD1Jp7Mss9b5D7j4YJv2+ZZav5jalJxTb2royfWRGakzraZxWj0KYSGNQkjI1ZpEEamOAQAiAFgMcNkA0QhACwBwgHtg1hNjGwC2MchSkQ1JAPlIinUsQVKhTrVQLzrreCpGVr6suxmdg4+cq06e3Wkr8Fm+5M7KvTjJWezms80Vm2m+HF3uOrRqPZCX1WZ1ZS92XDVZ6Bh04pxW3VlbpeqzLjV1s7W3lL5e2NtZ6WP+qegsM4U7yylPNrcuZGkmMRDKtP2Ucc1teduimOYjUNGFSw5tSTW9NGYqtTa7NcLE9PELZse5kTS1fJbHOlF6ybTWaduJPTm9z7B9TF6r6OdJ2Zo4CUZwc5O6d0lsst/E7MeXcOf+Lv2qRHJk+jdGzqTUnJqlfbzvoLenMMoODirKUWmlsvH8n3GsTtllw9nE7Z9xEaY5EsDhCEA1gHMDQDRBEAGxjY5sikwGzkV6sx9SRVqyAjrTKdRktSZc0Vozzt5ydoJ2stsnuIlatJtOoO5N0l5yVR7IxcU37z/LxOgbGOhGKUYpKK2JLIhUWtmXgZzL1MOKK10uUp2aKNfDOLbWcW8ujoYY4iztLLdL2S1r77NPmexorasW5aTXztQTDkkT1cEneUFktsVtXSugq+bW99rJ0vEwe5ZWK1RJj5UVvfawQwus7K/aFlDEUpSyjm+ZbzpND6NepCM9kUnJX9aW19VxaN0coPW2vp2LgasKi2LPgRWkR5hzZJ1wtxmopRilw3Io6Zg3SvzxlfqeT8QVMXGF/aluvl1spf4mUpXk+a1ua26xpth/htaGch6LtbBKznHKyu47VboKSLQ4r0ms6k5BAhyRKpog2FYACDYQFaZFJkkyGYEVRlSsWarKdWQFeR12HgqUKUOfVjfpbzfec1o3DurWpwXva0stkVm/A6PSjtZ7mVs7OkruZldqLnK8olqlnFEM4mbsiVadNMq1qLS9GTS93mL7RFMNIlzXKDlLXwMaFSEYyTq6lWM73cbX9FrY+06LE2nFVYq1/Xju6TiPKbH/Swe6svsyO3w/qR+FeBPpnH+yyGlG+3YYD5UVv8zp4CjToukn9POSm6nqa7s07bLcz2nUKKPPeR/p6bxsueM8Wo8FV1PBEwrmtMdsR7l6f5zfsWdtiIatdvJZLoyuOdMWpYhaNK9gJjp7WNhtXFeIaNWNS06MFzxbl03MvFUtSco7m11cxbw71sU90NVL6qJeUNG04S9+Pen+aLVed1McMtMkRGh0C7kPsCw5DrAR2ESWEBnzZBUZNIgqAQVGU6paqFOqwOl5E4O6xFZ8yVCP8ANnP+lB0r6vWaegKfm8DDKzn5yrLe7tRXdcydI5rrKXeh0keJauFXojKiJqEciOqijb2rTRDMmqMgmw1hxPlJ/wBrBb8RTXdI7Ki/RjwXgcf5QlejQW/F0l4nXw2Lgi08KR87fpNc8/5C/tjHfHjPvDO+ucD5P/2xj/ixf3lk19s8/Nft6fqkVXJFmxVxBEr15VpMdRza4oZIfhvWXFENJXcEv9RV4pf0o0eUFK9GM+eE0upr/go0VbET6dR/0I2cZT16NWPP5tyXGOZarg6n05FD4IYh8S7jSJDhsWOAQgiAy5EVQlkQ1AKtZlXVcpRitsmori8ixV5yTQlDXxFNbnfs2d9gmI3LucSlClCC2RhTprqjrP7SOfxWbj8S8Te0vPNJc7nLqvqr7JgVfXh8Rnbl6fTRqrXobCOsSUNgyuQn2pVCGoTVCvMhtDj+X7tSwv8A7lLqOupvYcn5RssGp+5iKEu9r5nU4Z3in0LwJUj52/SWRwvk8j+lsf8AFivvB29V2OJ8nT/S2O6XifvBavEs8/NXqclkUMTtNKaMzE7Sq2OdyrSJMP6yI2OovNcQ2nhqQ/X8YQfivkbtGXpJPY8u0xYL6WD307dj/M04y9JcUy0OHLG3MYmnqTnH3ZNdjGxL3KGlq15PmkozXZZ96ZQgXcKWI9DIj0AggCBlTIKpPMr1AKlY1+RdK+I1vd1e93/+THrM6LkZTtGtU/dlbflG3jIStTlp6Sl6UfhT63n8zIkvpI8fkaumH6bW6y7FYzIr01wfgZS9XFGqQ06LyFUFT2AnsCvtSqkEyertIJkN4cf5Tf2fU/iUvE6fRsr04PfGL7Ujl/KlK2Aa31qdupSfyOn0UrU4L92K7i3pnHzn6hPVRw3k7/auNfTifvB3NU4fydL9J47jX+8E14lnm+VXrTWXUZWK2mtT2GXjVmVTi5UmGAGx0NqDdrwedJ9El3ovp5ozpqypPpku5F6nLNFocd4Q8p6f6mpvTg+rP8TCR0+m6ethr88JKXfbwkcwi7gnlNEeMgPCCEEQGTMgqE8itVAp1zs+SlG2GjvnKF+Dnd9yRxVY9B0XT1KFFWtZSl1wpqK8WRLTHDO0jUvJvfdlOn6y4MmxrzZBhnd9TM5etWNVadPYGQKewUyGSnXIJos1iuw2rw4fyrf7KC314/YkdVoWqp0KU1snThNcHFNC0poihilCNemqsYS1oqTlZPfZPPrLdGlGEVGKUYxSjGMUlGKSskkiURWe6ZMqnGeTmP6Q0g/d14vi67/A7eVJsyuTPJqWExGLryqRn/iamtGMYtakdecrN3z9ddhMT4Z5a7tX+naYco6SXpF6gUtK7Qrj+TMY+ks1xRGSUNqIdEtXF5U4P9/5E+EndlfSD+ij8cfssdo7eS5p+LalDXpVIb4vta/4OOR2eFlm0vduup/mcjjKepUqR5lOVuF8i8PPtHkYDyODJESoIhCAyWVqxZZVxAFWjHWq01a95xVus9Dk7U+FGPbUnf5M4XQ9PWxFPovLudu+x3OkZWjLc52XCEUrdrZWW+GOHP4x7SPA7XwY7FPJjNH+s/hfiij1fTWpbAzFQ2BqIlh7U65AyxWK7KtqcAggQQunoIniiCjsLNFXZLGy9QRQ0s8zSw6MvSzzZLLF82YTYdZogZYwnrEOieGnj4/Qr+JHwY/CZIWM/VL+JHwZA6lrRJc+t102sDL0l03XcYenqdq7/ejGXdb5GrgqlrPdmVuU1POnL4o367rxLQ4ssaljwJkiGJYLMQsIIgMaZVrss1CnXYGjyRpa1dt82qu13fcjpNJy9GG9pzf80mzH5HU7RrVOMVx1bLvmaelZem1zRtBfyq34lJdfTx5hkV9jGaPXpP4WTSp3yH4akoNt3zVkUejM+F+gSTRi43TkKEvN6k5zspOzSir7E2+fqIHymk76tFLjNv5FtOO+WsTy1asdpWaMqWnKr9mC7SN6Wq+7DvHatHVY4bFg2MRaVq+7Dsf4jv8ANau6PYye1b+VRv0kXcNE5aGmKq9mPeWafKKov+3DtkO1nbqKTw7CgszI0nF3b4mV/wBVVlsp0/6mZ+L0/XlfKn9V/iO1nTPWtttOxZwcfSRyVTTtaPND6r/Es6G5VqVaFKpT1XN6sZxl6OtzJp7xMOiOpx28Q7nHZU4/GvsszKksyxicapxjFJqzbbdsynUeZWV8dZjls4CeSLOnYa1DW93Ul8mUNGzyRr1Ya9GUd8Jpcf7Zarj6ivlysCdFaBOmXcpwgXEBjVGUq7LdUo1wh2nJigo0KaftyhKXTtk+5Ir4qprSk98m+80cHDzdGO+NKcuDaVNeDMq5SXf09eZPpRuSVIW/vIVJEOn6+pRlzOS82uL291yIhte/b5cfiG6lWdTmlJ24c3cTwpZCw9MtxgaQ8uZ2r+aB5voLagHzZIqqkHzJa1Q6oFXzQnSLOqJxApzpkMqZflAjlADGxVHIwcXCUZKccpRkpRe5p3R1tamZOOobcgOv0bi1WpU6sdk43a3S2SXbctSZzHI7ENecoPpq013SXgzpmZTD18V++sSv6Pew6DDO8bdPy/I5zR8rG9gJ7e3vRMOfqYc1XVpzjunJd4UybS1PVr1Fval2pMgiy7gPCNCBh1iHCQ1q1Nfvxb4J3+RJXZJoGlr4mmuPhYFY3LscXlSnwpU+5yfezF2M2NKzWrGP/klUqdSyj3Iyai2Mzty9Lp4/H7XMLHZxMHlRX1qqprZBXfxP8rHQYRq2s9iTb4I42rUdSpOb9qTl1PYWqw6m3pNQjsLCQyiiexZyGqI7VCkOsSGaodUdYQDGhriSAaAiaGOJM0MaAqVYmfiqZq1IlSvADJwlXzNWFRey8+Dyfc2dunfNbHmnvRxOJhY6Lk5itejqt+lSeo/h9n++gpaHZ0l9TNW3hHZm9o2XfddzOdpuzNzRs9nFPsdysN+oj8VPT8fpU/egvmZyZscoo/qn8cex/kY6Lw8w64gCJGHiOcuclpqOI1nzU5OK3u6fyKmIW0l0JSfnJS5owfa3b8SJWxxu0Q6LSsvTSTuqcY00+Cz77jIpSViJklBO9kU5epEdtfpBpWtqYeUdkqnoJdF/S7r9pg4emXtL1HUqtezT9CK5ul9fyIqdMvDzc1u62zoIlSEoj0izMLBsEQAYGh1hWAbYDQ4TQEbGtElhrQFeaIasci1OJFKIGRiqYtAVvNV7P1aq1Hx2x78ustV6ZQq02ndbU010NEStS3baJdia2jeYw9H11VpxnsfqyW5raa2HrRgrt8Okzepk/Ovj2vcoY/Rxe6p3NN/gYBsY3Ea9GXGLXaYty8PMvXtnR9wAESozqsCbBVlT1sr3ts25X/EfqB830ArMxO4XKWKpy59X4k0W3ioQjrKUW7Oyvdt8xjuAtQr2t56i0xqUEIE0Yj4wHapZgCQUIRIQgoVgAIQgAILEA0ax7BYCNojlEnaBqgU507lSrQNbU6BqogVdEycJNP1ZdzNbWvYrwpolsV7XRTqLUrpZliXquK2NWfAroASdMb3m87kRAEFSsKwQMICwGhwgk1BsIIDWALASEG4BAIKAJMAgCAA2AFCADQrBCAkg2EggCwBw1gIIAkBCEIAiEIIAQhBIMSCIAMaIRIQBCATAhCAcIQgEIQgEEQgDELEIACEIABEIgIQhAf/Z" className="card-img card-img-top" /> */}
                                        </div>
                                    })
                                }
                                
                            </div>
                        </div>

                        {/* Footer */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatererPage;