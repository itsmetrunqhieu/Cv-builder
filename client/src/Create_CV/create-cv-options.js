import './create-cv-options.css';
import '../Login_Screen/Login.css'
import { Link } from "react-router-dom";

function CreateCVOptiopns() {
  return (
    <div className="create-cv-options">
        <div className="create-cv-options-header">
            <Link to="/">
                 <p className="CV-Buider-Name create-cv-options-CV-Buider-Name">CV Builder</p>
            </Link>
        </div>
        <img 
            src='/Image/Login_Screen/CV.svg's
            className='create-cv-options-CV'
            alt='CV'
        />
        <img 
            src='/Image/Login_Screen/CV-counter.svg'
            className='create-cv-options-CV-counter'
            alt='CV-counter' 
        />
        <div className='create-cv-options-main'>
            <p className='create-cv-options-text'>How do you want to start?</p>
            <Link to="/create-cv">
                <div className="create-cv-options-button create-a-new-resume-button">
                    <img 
                        src='/Image/Create_CV_Options/File_dock_light.svg'
                        className='create-cv-options-icon'
                        alt='icon'
                    />
                    <p className='create-cv-options-button-text'>Create a new resume</p>
                </div>
            </Link>
            <p className='create-cv-options-or create-cv-options-text'>Or</p>
            <Link to="/login">
                <div className="create-cv-options-button I-already-have-a-resume-button">
                    <img 
                        src='/Image/Create_CV_Options/Arhive_export_light.svg'
                        className='create-cv-options-icon'
                        alt='icon'
                    />
                    <p className='create-cv-options-button-text'>I already have a resume</p>
                </div>
            </Link>
        </div>
        <Link to="/">
            <div className="create-cv-options-button back-button">
                <img 
                    src='/Image/Create_CV_Options/Arrow_alt_left_alt.svg'
                    className='create-cv-options-icon'
                    alt='icon'
                />
                <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
            </div>
        </Link>
    </div>
  );
}

export default CreateCVOptiopns;
