import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { addTrade } from '../redux/actions/TradesActions'
import Message from '../components/Message';
import Loader from '../components/Loader';

import { ITrades } from '../interfaces/ITrades';

const AddTradesScreen: React.FC = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [entryPrice, setEntryPrice] = useState<ITrades['entryPrice']>(0);
    const [executedAmount, setExecutedAmount] = useState<ITrades['executedAmount']>(0);
    const [profitTarget, setProfitTarget] = useState<ITrades['profitTarget']>(0);
    const [stopLoss, setStopLoss] = useState<ITrades['stopLoss']>(0);
    const [closedPrice, setClosedPrice] = useState<ITrades['closedPrice']>(0);
    const [description, setDescription] = useState<ITrades['description']>("");

    const { loading, success, error } = useSelector((state: RootStateOrAny) => state.userRegister);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addTrade({ entryPrice, executedAmount, profitTarget,stopLoss, closedPrice, description}));
    }




    
    useEffect(() => {
        if(success) {
            navigate("/");
        }
    }, [dispatch, success]);


  return (
      <Container>
        <Row className='justify-content-center'>
            <Col xs={12} md={6}>
                <h2 className="mb-4">New Trade</h2>
                {error && <Message variant="danger">{error}</Message>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="entryPrice" className="mb-3">
                        <Form.Label>Entry Price</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={Number(entryPrice)} 
                            placeholder="Entry Price" 
                            onChange={(e) => setEntryPrice(Number(e.target.value))}
                            min="1"
                            max="1000000"
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="executedAmount" className="mb-3">
                        <Form.Label>Executed Amount</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={Number(executedAmount)} 
                            placeholder="Executed Amount" 
                            onChange={(e) => setExecutedAmount(Number(e.target.value))}
                            min="1"
                            max="1000000"
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="profitTarget" className="mb-3">
                        <Form.Label>Profit Target</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={Number(profitTarget)} 
                            placeholder="Profit Target" 
                            onChange={(e) => setProfitTarget(Number(e.target.value))}
                            min="1"
                            max="1000000"
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="stopLoss" className="mb-3">
                        <Form.Label>Stop Loss</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={Number(stopLoss)}
                            placeholder="Stop Loss"
                            name="stopLoss"
                            onChange={(e) => setStopLoss(Number(e.target.value))}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="closedPrice" className="mb-3">
                        <Form.Label>Closed Price</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={Number(closedPrice)}
                            placeholder="Closed Price"
                            name="closedPrice"
                            onChange={(e) => setClosedPrice(Number(e.target.value))}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="description" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={String(description)}
                            placeholder="Description"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    {/* <Form.Group controlId="createdDate" className="mb-3">
                        <Form.Label>Date Opened</Form.Label>
                        <Form.Control 
                            type="date" 
                            value={new Date(closedPrice)}
                            placeholder="Closed Price"
                            name="closedPrice"
                            onChange={(e) => setClosedPrice(new Date(e.target.value))}
                        >
                        </Form.Control>
                    </Form.Group> */}
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            {loading ? <Loader /> : `Add Trade`}
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
  );
};

export default AddTradesScreen;











