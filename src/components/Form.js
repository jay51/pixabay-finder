import React, { Component } from 'react'
import { Button, Carousel, InputGroup, FormGroup, DropdownButton, MenuItem ,FormControl } from "react-bootstrap";
import animal from "./../images/animal.jpg";

export default class Form extends Component  {
  render() {
    return (
      <div>
            
            <Carousel.Item>
                <img className="header-img" alt="900x500" src={animal} />
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
            </Carousel.Item>

      </div>
    )
  }
}
