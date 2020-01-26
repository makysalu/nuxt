import { mount } from '@vue/test-utils'
import RestaurantCard from '../components/RestaurantCard'

describe('RestaurantCard',()=>{
    const props ={
        id: 0,
        name:'nombre',
        description: 'description',
        text: 'texto largo',
        slug: 'slug',
        category: 'category',
        city: 'city',
        addres: 'direccion',
        likes: 0,
        image: '../assets/images/restaurante.jpg'
    }

    const wrapper = mount(RestaurantCard, {propsData: props})
    test('is mounted',()=>{
        expect(wrapper.isVueInstance()).toBe(true)
    })

    test('is mounted',()=>{
        expect(wrapper.props().name).toBe('nombre')
        expect(wrapper.props().description).toBe('description')

    })

})