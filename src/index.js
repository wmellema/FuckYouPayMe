import MicroModal from 'micromodal';
import styles from './modal.css';
var html = require('./modal.html');
document.body.innerHTML = html + document.body.innerHTML;
MicroModal.init();
MicroModal.show('modal-1');

var el = document.getElementById('fypmbutton');
el.parentNode.removeChild(el);