import React, { Component } from 'react'
import { Button, Carousel, InputGroup, FormGroup, DropdownButton, MenuItem, 
        FormControl, Grid, Row, Col } from "react-bootstrap";
import animal from "./../images/animal.jpg";

export default class Form extends Component  {
  render() {
    return (
      <div>
            
            <Carousel.Item>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Carousel.Caption>
                            {/* /////////// */}
                                <FormGroup>
                                    <InputGroup>
                                    <FormControl type="text" />
                                        <DropdownButton
                                            componentClass={InputGroup.Button}
                                            id="input-dropdown-addon"
                                            title="Images"
                                            >
                                            <MenuItem key="1">Videos</MenuItem>
                                        </DropdownButton>
                                    </InputGroup>
                                </FormGroup>
                            {/* //////// */}
                            </Carousel.Caption>
                            <img className="header-img" alt="900x500" src={animal} />
                            
                         </Col>
                    </Row>
                </Grid>
            </Carousel.Item>

      </div>
    )
  }
}
