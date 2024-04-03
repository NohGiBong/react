import Tag from './Tag2';
import deleteIcon from '../assets/delete.png';
import './TaskCard2.css';

export default function TaskCard2( {title, tags, handleDelete, index} ) {
    return (
        <article className='task_card'>
            <p className='task_text'>{title}</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {/* eslint-disable-next-line react/prop-types */}
                    {tags.map((tag, index) => (
                        <Tag
                            tagName={tag}
                            key={index}
                            selected={true}
                        />
                    ))}
                </div>
                <div className='task_delete'>
                    <img className='delete_icon' src={deleteIcon} alt=''  onClick={() => handleDelete(index)} />
                </div>
            </div>
        </article>
    );
}