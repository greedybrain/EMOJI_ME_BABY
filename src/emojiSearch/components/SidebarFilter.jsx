import React from 'react';
import Logo from './Logo';

const SidebarFilter = ({ emojisCategories, handleCategoryClick, handleAllEmojiClick }) => {
     // Inside of the sidenav we will have links/buttons displaying the names of each category/group
     const refEmojis = ["😃", "👩🏼‍🤝‍👨🏽", "🐶", "🍟", "🏔️", "🎳", "⌚", "♿", "🏁"];
     const customSlugs = ['Smileys', 'People & Body', 'Animal & Nature', 'Food & Drink', 'Travel', 'Activities', 'Items', 'Symbols', 'Flags']
     const renderCategoriesList = emojisCategories.map((cat, index) => {
          return (
               <li
                    onClick={handleCategoryClick}
                    key={index}
                    data-name={cat.slug}
               >
                    <div
                         className="acc-emoji"
                         data-name={cat.slug}
                    >
                         {refEmojis[index]}
                    </div>
                    <div
                         className="category"
                         data-name={cat.slug}
                    >
                         {customSlugs[index]}
                    </div>
               </li>
          )
     })
     return ( 
          <>   
               <Logo />
               <ul>
                    <li
                         onClick={handleAllEmojiClick}
                         data-name="all-emojis"
                    >
                         <div
                              className="acc-emoji"
                              data-name="all-emojis">
                              <span role="img" aria-label="present emoji">💁🏽</span>
                         </div>
                         <div
                              className="category"
                              data-name="all-emojis"
                         >
                              All Emojis
                         </div>
                    </li>
                    {renderCategoriesList}
               </ul>
               <div className="side-footer">
                    <span role="img" aria-label="copyright emoji">©️</span> 2020 EmojiWorld
               </div>
          </>
     );
}

export default SidebarFilter;