import React from 'react'
import { Helmet } from 'react-helmet'


const TitleContainer = ({ page, category }) => {

    if(category && !page){
        switch (category) {
            case 'category1':
                page = 'Perros';
                break;
            case 'category2':
                page = 'Gatos';
                break;
            case 'category3':
                page = 'Animales Pequeños';
                break;
            case 'category4':
                page = 'Ofertas';
                break;
        }
    } else if (!page){
        page = 'Home'
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${page} | Mascotapp`}</title>
            </Helmet>
        </React.Fragment>
    )
}

export default TitleContainer