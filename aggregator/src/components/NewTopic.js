import React from 'react';
import alligator_background from '../resources/images/alligator_background.png';

const Topics = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundImage:`url(${alligator_background})`, backgroundSize:"cover", backgroundRepeat:"repeat"}}>
        <div className="text-center">
          <div className="row">
            <h1 className="display-5 fw-bold py-4 text-white" style={{backgroundColor:"#407db4"}}>New Topics</h1>
          </div>
          <div className="row">
            <div className="col mx-5">
              <h1 className="display-5 fw-bold py-4">Lorem ipsum</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor eros lectus, eget feugiat lacus pretium in. Nulla id leo at nisi dictum convallis sit amet at eros. Proin in euismod turpis. Integer luctus venenatis ante id pulvinar. Integer sagittis sollicitudin est, ut suscipit nulla hendrerit ut. Nunc eleifend scelerisque ex vitae posuere. Nullam vitae suscipit risus, nec auctor tortor. Curabitur ultricies arcu eu tellus iaculis maximus. Fusce auctor elementum tempus. Nulla facilisi. Quisque vestibulum non erat vel dapibus. Fusce eu ultrices orci. Cras molestie porta aliquet. Fusce sit amet massa nec nibh ultricies maximus et nec mi. Vivamus mauris augue, molestie non est nec, posuere lacinia libero.
                  Aliquam a sapien convallis ante condimentum dapibus. Ut laoreet, purus ut dapibus tempor, nunc risus tempus tortor, ut fermentum massa nisi vehicula nisl. Ut neque tellus, venenatis ac sollicitudin eget, interdum sit amet augue. Cras libero ligula, vestibulum quis bibendum at, tincidunt vel massa. Duis et purus rutrum magna sodales condimentum. Sed dictum, nunc ac condimentum varius, ex lectus euismod magna, nec hendrerit quam purus a felis. Aliquam erat volutpat.
                  estibulum dignissim, sem maximus dictum maximus, justo nibh sodales lectus, sed vestibulum lacus tellus at dui. Phasellus mollis ultrices ullamcorper. Praesent tempus, risus sit amet tincidunt ultrices, sapien purus aliquam ligula, ut suscipit urna elit quis quam. Duis malesuada, ligula nec faucibus condimentum, sem erat tempus felis, vitae sollicitudin augue arcu id quam. Vivamus vel arcu diam. Phasellus blandit, ligula vitae tempus aliquam, quam sapien tempor eros, eget lobortis est ex in neque. Proin ornare interdum ante non maximus. Aenean ac neque pulvinar, molestie urna in, aliquam est. Curabitur condimentum metus at turpis finibus, tempus sollicitudin nunc mattis. Praesent ut massa sed turpis fermentum semper. Sed elit ex, faucibus in metus non, consequat aliquam felis. Cras maximus convallis dolor vel eleifend. Nam porta ac lectus sed dignissim. Curabitur facilisis diam vel erat pharetra, sed eleifend purus fringilla. Cras vitae ullamcorper velit.
                  Fusce posuere ultrices eros sit amet consectetur. Curabitur non urna faucibus, tempus urna vitae, lobortis ex. Aliquam volutpat vehicula leo, eu aliquam mi. Proin fringilla, mi nec malesuada commodo, orci orci tempus nulla, consequat venenatis orci nisl a arcu. Pellentesque imperdiet, nulla eget luctus lobortis, ante turpis dignissim nisl, at porta lectus enim sit amet felis. Phasellus at malesuada nisi, eget aliquam mi. Integer rhoncus bibendum iaculis. Quisque ipsum dolor, scelerisque ac fringilla at, consectetur eget felis. Aliquam urna diam, feugiat eget cursus et, varius sit amet magna. Vivamus viverra nisl elit. Integer in consectetur quam, sed auctor velit.
                  Duis sit amet neque eros. Sed imperdiet, arcu eget euismod posuere, est magna lacinia nulla, quis pulvinar eros leo quis neque. In imperdiet ligula turpis, sed suscipit ipsum sagittis at. Nulla tincidunt auctor erat, et scelerisque dui maximus ornare. Integer suscipit augue vitae ligula volutpat, ac pulvinar leo pharetra. Sed in lectus ultricies, ornare nisi vel, vestibulum sem. Nulla in sollicitudin sapien.
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topics;
