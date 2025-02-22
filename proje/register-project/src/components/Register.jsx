import { useState } from 'react';
import { Form, Label, Input, FormGroup, Button, Card, CardBody, CardHeader} from 'reactstrap';

const initialValues = {
  ad: '',
  soyad: '',
  email: '',
  password: ''
}

export default function Register() {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = ((event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
  })

  const handleSubmit = ((event) => {
    event.preventDefault();

  }) 

  
  return (
  <Card>
  <CardHeader>
    Kayıt Ol
  </CardHeader>
  <CardBody>
    <Form>
  <FormGroup>
    <Label for="ad">
      Ad: 
    </Label>
    <Input
      id="ad"
      name="ad"
      placeholder="Adınızı giriniz"
      type="text"
      onChange={handleChange}
      value = {formData.ad}
    />
  </FormGroup>
  <FormGroup>
    <Label for="soyad">
      Soyad:
    </Label>
    <Input
      id="soyad"
      name="soyad"
      placeholder="Soyadınızı giriniz"
      type="text"
      onChange={handleChange}
      value = {formData.soyad}
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      Email:
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Kurumsal emailinizi giriniz"
      type="email"
      onChange={handleChange}
      value = {formData.email}
    />
  </FormGroup>
  <FormGroup>
    <Label for="password">
      Şifre:
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="Güçlü bir password seçiniz"
      type="password"
      onChange={handleChange}
      value = {formData.password}
    />
  </FormGroup>

  <Button onChange={handleSubmit}>
    Submit
  </Button>
</Form>
</CardBody>
  </Card>)
}