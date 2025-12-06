import './EmptyState.css';
import detectiveIllustration from '../../assets/Empty.svg';

const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <img src={detectiveIllustration} alt="Empty state illustration" />
      </div>
      <p className="empty-text">Empty...</p>
    </div>
  );
};

export default EmptyState;

