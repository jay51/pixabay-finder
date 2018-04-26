import React from "react";
import { Grid, Col, Row, Thumbnail, Button, } from "react-bootstrap"

 const Layout = props =>{
     return(
         <div>
             <div className="panle">
             <button className="panle-btns">Image</button>
             <button className="panle-btns">Video</button>
             <button className="panle-btns">illstrusions</button>
             <button className="panle-btns">vector graphics</button>
            </div>
            <div className="images">
                <Grid >
                    <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                        </Thumbnail>
                    </Col>
                    </Row>
                </Grid>
            </div>
        </div>
     );
 }

 export default Layout;
