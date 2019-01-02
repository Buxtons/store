import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import infoGraphic from '../../img/info_graphic.svg';

export default function LeftBlock() {
  return (
    <div className="col-lg-6 content-left">
				<div className="content-left-wrapper">
					<Link to={process.env.PUBLIC_URL + "/"} id="logo">
            <img src={logo} alt="" width="49" height="35" />
            <h1 className="title title-light">Buxtons Upload</h1>
          </Link>
					
					<div>
						<figure><img src={infoGraphic} alt="" className="img-fluid" /></figure>
						<h2>Share Files with Us<br/>Quickly & Easily</h2>
						<p>We use public GitHub repositories to store your files for free. You can create your own free unlimited cloud storage even on private repos. </p>
						<a href="https://www.buxtons.net#utm_source=upload-page&utm_medium=upload-page" target="blank" className="btn_1 rounded">Visit our Website!</a>
					</div>
					<div className="copy">All Rights Reserved. Buxtons.</div>
				</div>
			</div>
  );
}
