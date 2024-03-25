<template>

    <div class="default-page">
        <div class="code-editor">	
            <span class="control"></span>
            <span class="control"></span>
            <span class="control"></span>
            <div class="default-content">
                <router-view />
            </div>
        </div>
    </div>
</template>
<style>
@font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

*, body{font-family: 'IBMPlexSansKR-Regular' !important;}
.default-page {height: 100%;display:flex;align-items: center;}
.default-content{display:flex;align-items: center;flex-direction: column;padding:20px;min-height:400px}
.code-editor:before,
.code-editor:after,
.code-editor span.control:before,
.code-editor span.after:after {
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-o-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	content: '';
	position: absolute;
	z-index: 1;
	-webkit-transition: all .5s ease-in-out;
    -moz-transition: wall .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}

.code-editor {
  position:relative;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-o-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	margin: 0 auto;
  padding-top:40px;
   	width: 750px; 
   	text-align: left;
   	background-color: #212121;
   	border-radius:  5px;
   	overflow: auto;
   	-webkit-transition: all .5s ease-in-out;
    -moz-transition: wall .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}

.code-editor:before {
	content: '';
	font-family: 'Consolas';
	color: #f5f5f5;
	padding-top: 6px; 
	text-align: center;
	top: 0;
	width: 750px;
	height: 30px;
	background-color: #424242;
	border-radius: 5px 5px 0 0;
	-moz-border-radius: 5px 5px 0 0;
	-o-border-radius: 5px 5px 0 0;
	-webkit-border-radius: 5px 5px 0 0;
}

.code-editor span.control:before {
	content: '';
	top: 9px;
	z-index: 2;
	padding: 6px;
	border-radius: 20px;
	-moz-border-radius: 20px;
	-o-border-radius: 20px;
	-webkit-border-radius: 20px;
}

.code-editor span.control:nth-child(1):before {
	margin-left: 15px;
	background-color: #df6963;
	
}

.code-editor span.control:nth-child(2):before {
	margin-left: 35px;
	background-color: #f5e18a;
	
}

.code-editor span.control:nth-child(3):before {
	margin-left: 55px;
	background-color: #97c38a;
}

/* -- iPad Screen -- */
@media only screen and (min-width: 480px) and (max-width: 768px) {
	.code-editor {
   		width: 500px; 
	}
	.code-editor:before {
		width: 500px;
	}
}

/* -- iPhone Screen -- */
@media only screen and (max-width: 479px) {
	.code-editor {
		width: 320px;
        height:calc(100% - 60px)
	}	
	.code-editor:before {
		width: 320px;
	}
	.default-content{padding:0}
}


</style>
